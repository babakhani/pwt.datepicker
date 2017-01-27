const Template = `
<div id="plotId" class="datepicker-plot-area datepicker-plot-area-inline-view">

    
    {{#navigator.enabled}}
    <div class="navigator">
        <div class="datepicker-header">
            <div class="btn btn-next">&lt;</div>
            <div class="btn btn-switch">{{ switch.date }}</div>
            <div class="btn btn-prev">&gt;</div>
        </div>
    </div>
    {{/navigator.enabled}}
    
    {{#days.enabled}}
    <div class="datepicker-day-view" >    
        <div class="month-grid-box">
            <div class="header">
                <div class="title"></div>
                <div class="header-row">
                    <div class="header-row-cell">ش</div>
                    <div class="header-row-cell">ی</div>
                    <div class="header-row-cell">د</div>
                    <div class="header-row-cell">س</div>
                    <div class="header-row-cell">چ</div>
                    <div class="header-row-cell">پ</div>
                    <div class="header-row-cell">ج</div>
                </div>
            </div>    
            <table cellspacing="0" class="table-days">
                <tbody>
                    <tr>
                        <td class=""><span unixdate="1468611000000" class="other-month">۲۶</span></td>
                        <td class=""><span unixdate="1468697400000" class="other-month">۲۷</span></td>
                        <td class=""><span unixdate="1468783800000" class="other-month">۲۸</span></td>
                        <td class=""><span unixdate="1468870200000" class="other-month">۲۹</span></td>
                        <td class=""><span unixdate="1468956600000" class="other-month">۳۰</span></td>
                        <td class=""><span unixdate="1469043000000" class="other-month">۳۱</span></td>
                        <td class=""><span unixdate="1469129400000">۱</span></td>
                    </tr>
                    <tr>
                        <td class=""><span unixdate="1469215800000">۲</span></td>
                        <td class=""><span unixdate="1469302200000">۳</span></td>
                        <td class=""><span unixdate="1469388600000">۴</span></td>
                        <td class=""><span unixdate="1469475000000">۵</span></td>
                        <td class=""><span unixdate="1469561400000">۶</span></td>
                        <td class=""><span unixdate="1469647800000">۷</span></td>
                        <td class=""><span unixdate="1469734200000">۸</span></td>
                    </tr>
                    <tr>
                        <td class=""><span unixdate="1469820600000">۹</span></td>
                        <td class=""><span unixdate="1469907000000">۱۰</span></td>
                        <td class=""><span unixdate="1469993400000">۱۱</span></td>
                        <td class=""><span unixdate="1470079800000">۱۲</span></td>
                        <td class=""><span unixdate="1470166200000">۱۳</span></td>
                        <td class=""><span unixdate="1470252600000">۱۴</span></td>
                        <td class=""><span unixdate="1470339000000">۱۵</span></td>
                    </tr>
                    <tr>
                        <td class=""><span unixdate="1470425400000">۱۶</span></td>
                        <td class=""><span unixdate="1470511800000">۱۷</span></td>
                        <td class=""><span unixdate="1470598200000">۱۸</span></td>
                        <td class=""><span unixdate="1470684600000">۱۹</span></td>
                        <td class=""><span unixdate="1470771000000">۲۰</span></td>
                        <td class=""><span unixdate="1470857400000">۲۱</span></td>
                        <td class=""><span unixdate="1470943800000">۲۲</span></td>
                    </tr>
                    <tr>
                        <td class=""><span unixdate="1471030200000">۲۳</span></td>
                        <td class=""><span unixdate="1471116600000">۲۴</span></td>
                        <td class=""><span unixdate="1471203000000">۲۵</span></td>
                        <td class=""><span unixdate="1471289400000">۲۶</span></td>
                        <td class=""><span unixdate="1471375800000">۲۷</span></td>
                        <td class=""><span unixdate="1471462200000">۲۸</span></td>
                        <td class=""><span unixdate="1471548600000">۲۹</span></td>
                    </tr>
                    <tr>
                        <td class=""><span unixdate="1471635000000">۳۰</span></td>
                        <td class=""><span unixdate="1471721400000">۳۱</span></td>
                        <td class=""><span unixdate="1471807800000" class="other-month">۱</span></td>
                        <td class=""><span unixdate="1471894200000" class="other-month">۲</span></td>
                        <td class=""><span unixdate="1471980600000" class="other-month">۳</span></td>
                        <td class=""><span unixdate="1472067000000" class="other-month">۴</span></td>
                        <td class=""><span unixdate="1472153400000" class="other-month">۵</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    {{/days.enabled}}
    
    {{#month.enabled}}
    <div class="datepicker-month-view">
        {{#month.list}}
            <div class="month1 month-item ">{{title}}</div>            
        {{/month.list}}
    </div>
    {{/month.enabled}}
    
    {{#year.enabled}}
        <div class="datepicker-year-view" >
            {{#year.list}}
                {{#enabled}}
                    <div class="year-item ">{{title}}</div>
                {{/enabled}}
                {{^enabled}}
                    <div class="year-item year-item-disable">{{title}}</div>
                {{/enabled}}
                
            {{/year.list}}
        </div>
    {{/year.enabled}}
    <div class="datepicker-time-view"></div>
    <div class="toolbox ">
        <div class="btn-today">امروز</div>
    </div>
</div>
`;