// Hai nút icon chuyển đổi hình ảnh
$(document).on('ready', function () {
  var subMoTa = $('#mota')
  var subYeuCau = $('#yeucau')
  var jobID1 = $('#job1')
  var jobID2 = $('#job2')
  var jobID3 = $('#job3')
  var jobID4 = $('#job4')
  var jobID5 = $('#job5')
  var jobID6 = $('#job6')
  function openSubItemJob(id,jobId) {
    var itemID = jobId.find(id)
    var btnSub = itemID.find('#btn-open-sub')
    var hiddenSub = 'hidden-sub'
    var showSub = 'show-sub'
    var itemSubChild = id.find('.item-job-child-list-1')
    btnSub.on('click', () => {
      if(itemSubChild.hasClass('hidden-sub')){
        itemSubChild.addClass(showSub)
        btnSub.addClass('rotateUp')
        itemSubChild.removeClass(hiddenSub)
      } else {
        itemSubChild.removeClass(showSub)
        btnSub.removeClass('rotateUp')
        itemSubChild.addClass(hiddenSub)
      }
    })
  }
  function openSubItemParent(idp) {
    var btnSubParent = idp.find('#btn-detail')
    var hiddenSubParent = 'hidden-parent'
    var showSubParent = 'show-parent'
    var itemSubParent = idp.find('.item-job-sub')
    btnSubParent.on('click', () => {
      if(itemSubParent.hasClass('hidden-parent')){
        itemSubParent.addClass(showSubParent)
        itemSubParent.removeClass(hiddenSubParent)
        btnSubParent.html('Đóng')
        btnSubParent.addClass('cancel')
      } else {
        itemSubParent.removeClass(showSubParent)
        itemSubParent.addClass(hiddenSubParent)
        btnSubParent.html('Chi tiết')
        btnSubParent.removeClass('cancel')
      }
    })
  }

  openSubItemJob(subMoTa,jobID1)
  openSubItemJob(subMoTa,jobID6)
  openSubItemJob(subYeuCau,jobID1)
  openSubItemJob(subYeuCau,jobID6)
  openSubItemParent(jobID1)
  openSubItemParent(jobID2)
  openSubItemParent(jobID3)
  openSubItemParent(jobID4)
  openSubItemParent(jobID5)
  openSubItemParent(jobID6)
});