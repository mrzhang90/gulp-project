const React = window.React;
class Title_tag extends React.Component{
    render(){
        return(
            <div className={this.props.className}>
                {this.props.title}
            </div>
        )
    }
} 
class Header extends React.Component{
    render(){
        var services = this.props.services;
        return(
            <div className="header">
                <div className="set_rotate">
                    <div className="bg_rotate"></div>
                    <div className="hard_photo">
                        <img  src={services.userPhoto} />
                    </div>
                    <div className="userName">
                        {services.nickName}
                    </div>
                    <div className="titleTag">
                       {services.isBestScore.value && <Title_tag title="本场得分王" className="tag scoringKing"></Title_tag>}
                       {services.isBestBoard.value && <Title_tag title="本场篮板王" className="tag backBoard"></Title_tag>}
                       {services.isBestAssit.value && <Title_tag title="本场助攻王" className="tag hand"></Title_tag>}
                    </div>
                    <div className="school">
                        <img src={services.teamLogo}/>
                        <span className="name">{services.teamName}</span>
                        <span className="score">{services.number}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;