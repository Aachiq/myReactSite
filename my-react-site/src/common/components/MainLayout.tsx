
interface IPropsMainLayout {
 title: string;
 description: string;
}

export default function MainLayout(props: IPropsMainLayout) {
  const {title, description} = props;

  return (
    <div className="container-fluid" 
         style={{ 
                  backgroundImage: 'url("b1.jpg")', 
                  height: '500px',
                  backgroundSize: 'cover', 
                  backgroundAttachment: 'fixed',
                  textAlign: 'center',
                  paddingTop: '150px'
               }}
    >
      <div>
        <h1 className="text text-white" style={{
            fontSize: '80px'
        }}>
          {title}
        </h1>
        <p className="text text-white">
          {description}
        </p>
        <button className=" btn btn-secondary">Visit Channel</button>
      </div>
    </div>
  )
}
