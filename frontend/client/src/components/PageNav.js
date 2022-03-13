import "./CSS/PageNav.css"

function NavPage(){
    return(
        <div className = "box">
            <div className = "container">
                <nav>
                    <span><a visited>1</a></span>
                    <span><a>2</a></span>
                    <span><a>...</a></span>
                    <span><a>4</a></span>
                    <span><a>>></a></span>
                </nav>
            </div>
        </div>
    )
}
export default NavPage;