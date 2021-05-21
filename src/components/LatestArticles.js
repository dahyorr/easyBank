import currency from '../static/image-currency.jpg'
import plane from '../static/image-plane.jpg'
import confetti from '../static/image-confetti.jpg'
import restaurant from '../static/image-restaurant.jpg'

const LatestArticles = () => {
    return (
        <div className="LatestArticles">
            <div className="container">
                <div className="text-content">
                    <p className="large-text">Latest Articles</p>
                </div>

                <div className="flex">
                    <div>
                        <div className="img-container">
                            <img src={currency} alt="Currency" />
                        </div>
                        <div className="content">
                            <small>By Claire Robinson</small>
                            <h3>Receive money in any currency with no fees</h3>
                            <p>The world is getting smaller and we’re becoming more mobile.
                                So why should you be forced to only receive money in a single …</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="img-container">
                            <img src={restaurant} alt="Currency" />
                        </div>
                        <div className="content">
                            <small>By Wilson Hutton</small>
                            <h3>Treat yourself without worrying about money</h3>
                            <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="img-container">
                            <img src={plane} alt="Currency" />
                        </div>
                        <div className="content">
                            <small>By Wilson Hutton</small>
                            <h3>Take your Easybank card wherever you go</h3>
                            <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="img-container">
                            <img src={confetti} alt="Currency" />
                        </div>
                        <div className="content">
                            <small>By Claire Robinson</small>
                            <h3>Our invite-only Beta accounts are now live!</h3>
                            <p> After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}
export default LatestArticles