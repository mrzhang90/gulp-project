const React = window.React;

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="header">
                <h1 className="title_header">第五届北京MBA篮球联赛</h1>
                <div className="FirstTeam">
                    <h2>主队</h2>
                    <img src=""/>
                    <h3>中国科学院MBA</h3>
                    <p>56</p>
                </div>
                <div className="vs">
                    <div>已结束</div>
                    <button>查看回放</button>
                </div>
                <div className="SecondTeam">
                    <h2>客队</h2>
                    <img src=""/>
                    <h3>北京理工MBA</h3>
                    <p>54</p>
                </div>
                <div>2018年05月12日 08:30</div>
            </div>
        )
    }
}

export default Header;