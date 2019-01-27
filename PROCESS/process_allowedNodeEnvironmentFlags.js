process.allowedNodeEnvironmentFlags.forEach((flag) => {
	console.log(flag)
});
// for the --perf_basic_prof flag
console.log(   process.allowedNodeEnvironmentFlags.has("perf-basic-prof")   )
console.log(   process.allowedNodeEnvironmentFlags.has("--stack-trace-limit=100=50")   )
console.log(   process.allowedNodeEnvironmentFlags.has("perf_basic_prof")   )


