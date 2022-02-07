---
title: "Jenkins Snippets"
date: 2022-02-07T11:08:15-05:00
draft: false
tags: [
    "jenkins",
    "tutorial",
    "groovy"
]
---

## Ignorable Preface

One of my tasks at work was to prevent builds aborted by `kill_outdated_builds()` from resuming upon a Jenkins restart. After I finished that one, I got a task later to remove all unsafe method usages, mainly the use of `getRawBuild` which was used beyond the aforementioned function. It is used liberally on StackOverFlow, which is unfortunate, as if a public repository decides to use the function, there will be a massive security hole.

These two snippets are a safe but rather unintuitive way to abort builds and get the build log in Jenkins. They took hours of research just to figure out and implement.

## Aborting Old / Outdated Builds

```groovy
import hudson.model.ParametersAction
import jenkins.model.Jenkins
import jenkins.model.CauseOfInterruption
// type of _build in case you need it
// import org.jenkinsci.plugins.workflow.job.WorkflowRun


@NonCPS
def abortOldBuilds() {
    def job = Jenkins.instanceOrNull.getItem(JOB_NAME)
    def build_id = BUILD_ID
    for (def _build: job.builds) {  // or job.getBuilds()
        def _build_id = _build.id as INT
        def _pr_number = _build.allActions.find(it in ParametersAction).getParameter("pr_number").value
        // optionally filter out builds
        if (_pr_number == pr_number) {
            // pr_number is paramaterized and stands for `pull request number`
            if (_build.isBuilding() && _build_id < build_id) {
                // abort this build since it's running and outdated
                def cause = "Aborted by build #${build_id} for being outdated (PR #${pr_number})"
                _build.getListner().getLogger().println(cause)
                _build.doStop()
                echo "Aborted build #${_build_id}"
                // Add aborted cause to _build status page (Hack)
                //  this way keeps the build as ABORTED and prevents builds from resuming upon a Jenkins restart
                def r = new ArrayList<>(Arrays.asList({ cause as String } as CauseOfInterruption))
                _build.addAction(new InterruptedBuildAction(r))
            }
        }
    }
}
```

## Getting Build Log

```groovy
import jenkins.model.Jenkins

@NonCPS
def getLog() {
    def job = Jenkins.instanceOrNull.getItem(JOB_NAME)
    def build = job.getBuildByNumber(Integer.parseInt(BUILD_NUMBER))
    return build.logFile.text
}
```
