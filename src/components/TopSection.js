import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"

export default function TopSection () {
    return (
        <div>
        <Card style={{minHeight:'430px', width:'100%'}} className='bg-dark text-black'>
            <Card.Img style={{ height: "100%", width: "100%", position: "absolute" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt='card image'/>
            <Card.ImgOverlay style={{height:'100%', width:'580px', top: 'auto', marginLeft: '100px', marginTop:'50px', textAlign:'left'}}>
                <Card.Text style= {{fontSize:'2.5em', fontWeight: 'bold'}}>
                    Order groceries for delivery <br /> or pickup today
                </Card.Text>
                <Card.Text style={{fontSize:'1em'}}>
                    Whatever you want from local stores, brought right to your door.
                </Card.Text>
                <Form>
                    <Form.Group className='mb-3' controlId ='exampleForm.ControlInput1'>
                        <Form.Control size='lg' type='text' placeholder='Enter Your Address->' />
                    </Form.Group>
                </Form>
                
            </Card.ImgOverlay>
        </Card>
        </div>
    )
}