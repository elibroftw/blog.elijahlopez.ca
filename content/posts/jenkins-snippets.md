---
title: "Jenkins Snippets"
date: 2022-02-07T11:08:15-05:00
tags:
  - tutorial
  - programming
  - jenkins
  - groovy
  - devops
---

## Ignorable Preface

One of my tasks at work was to prevent builds aborted by `kill_outdated_builds()` from resuming upon a Jenkins restart. After I finished that one, I got a task later to remove all unsafe method usages, mainly the use of `getRawBuild` which was used beyond the aforementioned function. It is used liberally on StackOverFlow, which is unfortunate, as if a public repository decides to use the function, there will be a massive security hole.

These two snippets are a safe but rather unintuitive way to abort builds and get the build log in Jenkins. They took hours of research just to figure out and implement.

## Aborting Old / Outdated Builds

```groovy
import hudson.model.ParametersAction
import jenkins.model.Jenkins
import jenkins.model.CauseOfInterruption
import jenkins.model.Jenkins
// type of _build in case you need it
import org.jenkinsci.plugins.workflow.job.WorkflowRun

// TODO: create plugin or something for custom status messages

@NonCPS
def abortOldBuilds(String paramKey, String paramVal) {
    // param_key and paramVal can be used for PR numbers
    def job = Jenkins.instanceOrNull.getItem(JOB_NAME)
    def buildID = BUILD_ID
    // highest running ID
    def highestRID = buildID
    // in case the current build is old
    WorkflowRun curBuild

    def build = job.getLastBuild()
    // avoid .builds since it can cause iteration errors
    while (build != null) {
        def cbuildID = build.id.toInteger()
        def curParamVal = build.allActions.find{it in ParametersAction}?.getParameter(paramKey)?.value
        // optionally filter out builds
        if (curParamVal == param_val) {
            if (cbuildID == buildID) {
                curBuild = build
            } else if (build.isBuilding() && cbuildID < highestRID) {
                build.doKill()
                echo "terminated build #${cbuildID}"
                def cause = "Aborted by #${buildID} for being an old build" // + for paramVal
                // add to the log of another build
                build.getListener().getLogger().println(cause)
                // The below will cause zombie jobs and so was abandoned
                // def r = new ArrayList<>(Arrays.asList({ cause as String } as CauseOfInterruption))
                // _build.addAction(new InterruptedBuildAction(r))
            } else if (cbuildID > highestRID) {
                // update highest running ID
                highestRID = cbuildID
            }
        }
        build = build.getPreviousBuild()
    }
    if (highestRID > buildID) {
        println "Terminating self since newer build was found"
        def selfAbortCause = "Aborting due to the presence of a newer build"
        curBuild.doKill()
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
