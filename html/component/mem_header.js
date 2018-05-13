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
        return(
            <div className="header">
                <div className="set_rotate">
                    <div className="bg_rotate"></div>
                    <div className="hard_photo">
                        <img src="/assets/images/tmp_qy.png"/>
                    </div>
                    <div className="userName">
                        柴晨
                    </div>
                    <div className="titleTag">
                        <Title_tag title="本场得分王" className="tag scoringKing"></Title_tag>
                        <Title_tag title="本场篮板王" className="tag backBoard"></Title_tag>
                        <Title_tag title="本场助攻王" className="tag hand"></Title_tag>
                    </div>
                    <div className="school">
                        <img src="/assets/images/tmp1.png"/>
                        <span className="name">北京理工</span>
                        <span className="score">11</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;