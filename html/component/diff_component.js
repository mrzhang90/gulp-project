const React = window.React;
export default class DiffComponent extends React.Component{
    render(){
        var props=this.props;
        console.log(props)
        var teamName=props.isHost?props.services.homeTeamName:props.services.guestTeamName;
        var teamStatisticses =  props.isHost?props.services.statisticses[0]:props.services.statisticses[1];
        var statisticseUser = teamStatisticses[teamStatisticses.length - 1];
        return (
            <div className="diff_col ui-col">
                <div className="diff_canvas zoom5">
                    <canvas id={props.id} data-width={props.data_width}></canvas>
                </div>
                <div className="diff_dec">{teamName}</div>
                <ul className="diff_list">
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGrey"></i>
                            <span>两分</span>
                        </div>
                        <span className="alignRight">{statisticseUser.shotsSuccessTotal*2}</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgBlack"></i>
                            <span>三分</span>
                        </div>
                        <span>{statisticseUser.thirdsSuccessTotal*3}</span>
                    </li>
                    <li className="flex flex_li">
                        <div className="flex flex_left">
                            <i className="bgGreen"></i>
                            <span>罚球</span>
                        </div>
                        <span className="alignRight">{statisticseUser.penaltySuccessTotal}</span>
                    </li>
                </ul>
            </div>
        )
    }
}