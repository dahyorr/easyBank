import iconOnline from '../static/icon-online.svg'
import iconBudgeting from '../static/icon-budgeting.svg'
import iconOnBoarding from '../static/icon-onboarding.svg'
import iconApi from '../static/icon-api.svg'

const Features = () => {
    return (
        <div className="Features">
            <div className="container">
                <div className="text-content">
                    <p className="large-text">Why choose Easybank?</p>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </div>

                <div className="flex">
                    <div>
                        <img src={iconOnline} alt="Online Icon" />
                        <h2>Online Banking</h2>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                    <div>
                        <img src={iconBudgeting} alt="Online Icon" />
                        <h2>Simple Budgeting</h2>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </div>
                    <div>
                        <img src={iconOnBoarding} alt="Online Icon" />
                        <h2>Fast Onboarding</h2>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </div>
                    <div>
                        <img src={iconApi} alt="Online Icon" />
                        <h2>Open API</h2>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Features