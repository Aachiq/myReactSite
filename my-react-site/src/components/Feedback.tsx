export default function Feedback() {
  return (
        <div className="container">
            <div className="text-center">
                <h1 className="section-title" style={{ fontFamily: "serif" }}>TESTIMONY</h1>
                <h5 className="section-subTitle text-muted">Vos Commentaires sont la seule source de motivation </h5>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="feedback">
                        <img className="rounded-circle" width={250} height={250} src="av1.jpg" alt="avatar1" />
                        <p className="text-muted">الله ارحم الوالدين تبارك الله محتوى واعر بزاااف </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feedback">
                        <img className="rounded-circle pt-4" width={250} height={250} src="av3.png" alt="avatar3" />
                        <p className="text-muted">معمري تخيلت راسي غانفهم بها الطريقة شكرا</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feedback">
                        <img className="rounded-circle" width={250} height={250} src="av2.png" alt="avatar2" />
                        <p className="text-muted">الصراحة كلمة شكر قليلة فحقك</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
