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
        {{#days.viewMode}}
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
                        {{#days.list}}
                            <tr>
                                {{#.}}
                                    <td class=""><span unixdate="">{{title}} -  {{checkDayAccess}}</span></td>
                                {{/.}}
                            </tr>
                        {{/days.list}}
                    </tbody>
                </table>
            </div>
        </div>
        {{/days.viewMode}}
    {{/days.enabled}}
    
    {{#month.enabled}}
        {{#month.viewMode}}
            <div class="datepicker-month-view">
                {{#month.list}}
                    <div class="month1 month-item ">{{title}} -- <small>{{year}}</small></div>            
                {{/month.list}}
            </div>
        {{/month.viewMode}}
    {{/month.enabled}}
    
    {{#year.enabled }}
        {{#year.viewMode }}
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
        {{/year.viewMode }}
    {{/year.enabled }}
    <div class="datepicker-time-view"></div>
    <div class="toolbox ">
        <div class="btn-today">امروز</div>
    </div>
</div>
`;