

const ContactUs = () => {
    return (
        <div className=" px-5 lg:px-0">
            <div className="bg-black opacity-80">
                <div className="py-5 h-[80vh] md:h-[60vh] text-center text-3xl font-bold bg-[url('https://i.ibb.co/F4HzTBn/hm3.jpg')] bg-top bg-fixed">
                    <h1 className="text-white pt-48">CONTACT US</h1>
                </div>
            </div>
            <div className=" my-10 w-full lg:w-3/4 mx-auto">

                <div className=" grid grid-cols-1 md:grid-cols-2 items-center py-7 gap-5">
                    <div>
                        <h2> PHONE</h2>
                        <p>Our Client Advisors are available Monday through Saturday, 9:00AM - 11:00PM  and Sunday, 10:00AM - 9:00PM, excluding holidays.</p>
                    </div>
                    <div className=" grid lg:justify-end">
                        <button className="btn btn-primary lg:w-80 bg-green-950 hover:bg-green-700 ">CALL US +8801716112252</button>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center py-7 gap-5">
                    <div>
                        <h2> LIVE CHAT</h2>
                        <p>Our Client Advisors are available to chat Monday through Saturday, 9:00AM - 11:00PM and Sunday, 10:00AM - 9:00PM, excluding holidays. The option to chat will become active during these hours once an advisor is available.</p>
                    </div>
                    <div className=" grid lg:justify-end">
                        <button className="btn btn-primary lg:w-80 bg-green-700 hover:bg-green-700 ">CHAT UNAVAIABLE</button>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center py-7 gap-5">
                    <div>
                        <h2> WHATSAPP US</h2>
                        <p>Our Client Advisors are available to answer your WhatsApp messages
                            Monday through Saturday, 9:00AM - 8:00PM,
                            and Sunday 10:00AM 7:00PM, excluding holidays.</p>
                    </div>
                    <div className=" grid lg:justify-end">
                        <button className="btn btn-primary lg:w-80 bg-green-950 hover:bg-green-700 ">MESSAGE US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;