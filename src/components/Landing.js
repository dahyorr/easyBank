import mockup from '../static/image-mockups.png'

const Landing = () => {
    return(
        <div className="Landing">
            <div className="container flex">
                <div className="left flex">
                    <p className='large-text'>Next generation digital banking</p>
                    <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <a href="/" className="btn btn-cyan">Request Invite</a>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={mockup} className='mockup-image' alt='bg-desktop'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing 