compareEvtCnt.initialize();

var zone = $('#pcaCompareEvtCntView').parents('div.dropZone')[0];
var id = $('#pcaCompareEvtCntView').attr("id") + zone.id;
$('#pcaCompareEvtCntView').attr("id", id);

var zoneNum = getZoneNum(zone.id);

var topCnt_compareEvtCnt = 5;
//topN 값  엘라스틱 서치 쿼리  조건 세팅
if (typeof zoneMain[zoneNum].topCnt != 'undefined' || zoneMain[zoneNum].topCnt != null) {
    topCnt_compareEvtCnt = zoneMain[zoneNum].topCnt;
}
zoneMain[zoneNum].refresh = function (zoneId, zoneNum) {
    var id = '#pcaCompareEvtCntView' + zoneId;
    //권한그룹 세팅
    var authGrpNo = $("#authGrpNo").val()
    var treeGrpNo = model.grpNo;

    if (treeGrpNo == null || treeGrpNo == '') {
        treeGrpNo = 1;
    }
    var params = {
        authGrpNo: treeGrpNo
    }
    $.ajax({
        url: ctxPath + '/main/oms/evtStatus/getAuthGrpNos.do',
        type: 'POST',
        data: JSON.stringify(params),
        contentType: 'application/json; charset=utf-8',
        success: function (result) {
            //호출한 grp_no 들을 string 으로 hidden 값에 저장, 엘라스틱 or는 띄어쓰기로 구분 (예: A또는B또는C == A B C )
            $("#authGrpNos").val(result.resultData.replace(/,/g, ' '));

            // if(checkCnt == 0){ //레이아웃 새로고침 시 차트를 다시 그리지 않는다.
            compareEvtCnt.searchChartYesterDay(id);
            //compareEvtCnt.searchChartToday(id);
            // }
            //compareEvtCnt.createChart(id)

        }
    });


}

zoneMain[zoneNum].excel = function (zoneId, zoneNum) {
    var params = {
        layViewNo: zoneMain[zoneNum].layViewNo,
        ctrlPos: zoneId,
        viewKey: model.viewKey,
        viewKind: model.guid
    };

    HmUtil.exportExcel(ctxPath + '/main/layout/controls/exportPcaErrCnt.do', params)
}

zoneMain[zoneNum].resize = function (zoneId, zoneNum) {
    var id = '#pcaErrCntView' + zoneId;
}

zoneMain[zoneNum].refresh(zone.id, zoneNum);

detailComparePopup = function (day, type) {
    var title = "";
    if (day == 'today') {
        title = '금일';
    } else {
        title = '전일';
    }
    $.post(ctxPath + '/main/popup/layout/pcaCompareYesdayDetail.do', {'day': day, 'type': type}, function (result) {
        $('#pwindow').jqxWindow({
            width: 850,
            height: 700,
            title: '<h1>전일 이벤트 발생 수 비교 (' + title + ')</h1>',
            content: result,
            position: 'center',
            resizable: false
        });
        $('#pwindow').jqxWindow('open');
    });
}
