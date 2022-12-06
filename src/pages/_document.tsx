import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap" rel="stylesheet" />
            </Head>
            <body className='bg-black' >
                {/* <div style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/bg (6).png')", backgroundAttachment: 'fixed', backgroundPosition: "center", backgroundRepeat: "no-repeat" }}> */}
                <div>
                    <div className="bg"></div>
                    <svg width="0" height="0">
                        <linearGradient id="svg-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop stopColor="#FB5131" offset="0%" />
                            <stop stopColor="#E02170" offset="100%" />
                        </linearGradient>
                    </svg>
                    <svg width="0" height="0">
                        <linearGradient id="svg-gradient-t-m" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop stopColor="#FB5131" offset="0%" />
                            <stop stopColor="#E93E53" offset="100%" />
                        </linearGradient>
                    </svg>
                    <svg width="0" height="0">
                        <linearGradient id="svg-gradient-m-b" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop stopColor="#FB5131" offset="0%" />
                            <stop stopColor="#E93E53" offset="100%" />
                        </linearGradient>
                    </svg>
                    <div className="star-field">
                        <div className="layer"></div>
                        <div className="layer"></div>
                        <div className="layer"></div>
                    </div>
                    <Main />
                </div>
            </body>
            <NextScript />
        </Html>
    }
}