//p2r+loading overlay
/*p2rAndLoadingOverlay
 * chris
 */
function p2rAndLoadingOverlay() {
  console.log("started p2rAndLoadingOverlay");
  $(".p2rDiv").pullToRefresh()
          
          .on("start.pulltorefresh", function (evt, y) {
            console.log("start pulltorefresh");
            //$(".p2rDiv").LoadingOverlay("show");
          })
          
          .on("move.pulltorefresh", function (evt, percentage) {
            console.log("move pulltorefresh");
            $(".p2rDiv").LoadingOverlay("hide");
          })
          
          .on("end.pulltorefresh", function (evt) {
            console.log("end pulltorefresh");
            $(".p2rDiv").LoadingOverlay("hide");
          })
          .on("refresh.pulltorefresh", function (evt, y) {
            console.log("refresh pulltorefresh");
            $(".p2rDiv").LoadingOverlay("hide");
          });
}
