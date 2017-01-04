//p2r+loading overlay
/*p2rAndLoadingOverlay
 * chris
 */
function p2rAndLoadingOverlay() {
  //window.alert("started p2rAndLoadingOverlay");
  $(".p2rDiv").pullToRefresh()
          
          .on("start.pulltorefresh", function (evt, y) {
            $(".p2rDiv").LoadingOverlay("show");
          })
          
          .on("move.pulltorefresh", function (evt, percentage) {
            $(".p2rDiv").LoadingOverlay("hide");
          })
          
          .on("end.pulltorefresh", function (evt) {
            $(".p2rDiv").LoadingOverlay("hide");
          })
          .on("refresh.pulltorefresh", function (evt, y) {
            $(".p2rDiv").LoadingOverlay("hide");
          });
}
