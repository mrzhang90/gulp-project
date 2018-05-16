const React = window.React;
class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{}
        }
    }
    render(){
        const services=this.props.name.data;
        console.log(1,services)
        let href=`../video/${gameId}`
        return (
            <div className="header">
                <h1 className="title_header">{services.activityName}</h1>
                <div className="team_header">
                    <div className="FirstTeam">
                        <h2 className="teamTitle">主 队</h2>
                        <div className="teamPhoto" style={{backgroundImage: 'url(' + services.activityLogo + ')'}}></div>
                        <h3 className="teamName">{services.homeTeamName}</h3>
                        {services.status !=0 &&
                            <p className="teamScore">{services.homeTeamScore}</p>
                        }
                    </div>
                    <div className="vs">
                        <div>{services.status.desc}</div>
                          {(services.videoEnum.value ==1)&&
                            <a href={href} className="lookBank">{services.videoEnum.desc}</a>
                        }
                    </div>
                    <div className="SecondTeam">
                        <h2 className="teamTitle">客队</h2>
                        <div className="teamPhoto" style={{backgroundImage: 'url(' + services.homeTeamLogo + ')'}}></div>
                        <h3 className="teamName">{services.guestTeamName}</h3>
                        {services.status.value !=0 &&
                            <p className="teamScore">{services.guestTeamScore}</p>
                        }
                    </div>
                </div>
                <div className="currentTime">{services.competingTime}</div>
            </div>
        )
    }
}
export default HeaderComponent;