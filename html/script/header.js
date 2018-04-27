const React = window.React;
class HeaderComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            services:{}
        }
    }
    render(){
        const services=this.props.name
        return (
            <div className="header">
                <h1 className="title_header">{services.name}</h1>
                <div className="team_header">
                    <div className="FirstTeam">
                        <h2 className="teamTitle">主队</h2>
                        <div className="teamPhoto"></div>
                        <h3 className="teamName">{services.firstTeam.teamName}</h3>
                        {services.state !=0 &&
                            <p className="teamScore">{services.firstTeam.teamScore}</p>
                        }
                    </div>
                    <div className="vs">
                        <div>{services.stateVal}</div>
                        {services.state ==3 &&
                            <button className="lookBank">查看回放</button>
                        }
                    </div>
                    <div className="SecondTeam">
                        <h2 className="teamTitle">客队</h2>
                        <div className="teamPhoto"></div>
                        <h3 className="teamName">{services.secondTeam.teamName}</h3>
                        {services.state !=0 &&
                            <p className="teamScore">{services.secondTeam.teamScore}</p>
                        }
                    </div>
                </div>
                <div className="currentTime">{services.currentTime}</div>
            </div>
        )
     
    }
}
export default HeaderComponent;