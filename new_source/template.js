const Template = `
<div id="plotId" class="datepicker-plot-area datepicker-plot-area-inline-view">
    {{#navigator.enabled}}
        <div class="navigator">
            <div class="datepicker-header">
                <div class="btn btn-next">&lt;</div>
                <div class="btn btn-switch">{{ navigator.switch.text }}</div>
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
                                    
                                    {{#enabled}}
                                        <td data-unix="{{dataUnix}}" ><span  class="{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}">{{title}}</span></td>
                                    {{/enabled}}
                                    {{^enabled}}
                                        <td data-unix="{{dataUnix}}" class="disabled"><span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span></td>
                                    {{/enabled}}
                                    
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
                    {{#enabled}}               
                        <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>
                    {{/enabled}}
                    {{^enabled}}               
                        <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>
                    {{/enabled}}
                {{/month.list}}
            </div>
        {{/month.viewMode}}
    {{/month.enabled}}
    
    {{#year.enabled }}
        {{#year.viewMode }}
            <div class="datepicker-year-view" >
                {{#year.list}}
                    {{#enabled}}
                        <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>
                    {{/enabled}}
                    {{^enabled}}
                        <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>
                    {{/enabled}}                    
                {{/year.list}}
            </div>
        {{/year.viewMode }}
    {{/year.enabled }}
    <div class="datepicker-time-view"></div>
    {{#toolbox}}
    <div class="toolbox ">
        <div class="btn-today">{{text.btnToday}}</div>
    </div>
    {{/toolbox}}
</div>
`;