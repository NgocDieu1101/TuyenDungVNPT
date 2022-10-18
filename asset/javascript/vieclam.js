// Hai nút icon chuyển đổi hình ảnh
$(document).on('ready', function () {
  var subMoTaClass = $('.mota')
  var subYeuCauClass = $('.yeucau')
  var jobID1 = $('#job1')
  var jobID2 = $('#job2')
  var jobID3 = $('#job3')
  var jobID4 = $('#job4')
  var jobID5 = $('#job5')
  var jobID6 = $('#job6')
 
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

  function openSubItemJob(id,jobId) {
    var itemID = jobId.find(id)
    var btnSub = itemID.find('#btn-open-sub')
    var hiddenSub = 'hidden-sub'
    var showSub = 'show-sub'
    var itemSubChild = itemID.find('.item-job-child-list-1')
    console.log(itemSubChild)
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

  openSubItemJob(subMoTaClass,jobID1)
  openSubItemJob(subMoTaClass,jobID2)
  openSubItemJob(subMoTaClass,jobID3)
  openSubItemJob(subMoTaClass,jobID4)
  openSubItemJob(subMoTaClass,jobID5)
  openSubItemJob(subMoTaClass,jobID6)
  openSubItemJob(subYeuCauClass,jobID1)
  openSubItemJob(subYeuCauClass,jobID2)
  openSubItemJob(subYeuCauClass,jobID3)
  openSubItemJob(subYeuCauClass,jobID4)
  openSubItemJob(subYeuCauClass,jobID5)
  openSubItemJob(subYeuCauClass,jobID6)
  openSubItemParent(jobID1)
  openSubItemParent(jobID2)
  openSubItemParent(jobID3)
  openSubItemParent(jobID4)
  openSubItemParent(jobID5)
  openSubItemParent(jobID6)
});