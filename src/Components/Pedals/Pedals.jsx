import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './pedals.css'
import Tsmini1 from '../../assets/Pedals/Tsmini/1ped.png'
import Tsmini2 from '../../assets/Pedals/Tsmini/2ped.png'


import OD8501 from '../../assets/Pedals/OD850/1ped.png'
import OD8502 from '../../assets/Pedals/OD850/2ped.png'
import JD991 from '../../assets/Pedals/JD9 9/1ped.png'
import JD992 from '../../assets/Pedals/JD9 9/2ped.png'


function Pedals() {
  return (
    <div>
      <h1 className='dicM'> Pedals</h1>
      <div className='Pedals body'>
        <Card>
          <Card.Img variant="top" src={Tsmini1}
            onMouseOver={e => e.currentTarget.src = Tsmini2}
            onMouseOut={e => e.currentTarget.src = Tsmini1}
          />
          <Card.Body>
            <Card.Title> TSMINI Tube Screamer</Card.Title>
            <Card.Text className='price'>$129.00</Card.Text>
            <Card.Text>

              The TS MINI Tube Screamer Mini from Ibanez is a guitar effect overdrive pedal designed to emulate warm, natural tube overdrive
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={OD8501}
            onMouseOver={e => e.currentTarget.src = OD8502}
            onMouseOut={e => e.currentTarget.src = OD8501}
          />
          <Card.Body>
            <Card.Title>OD850 "Limited Edition"</Card.Title>
            <Card.Text className='price'>$275.00</Card.Text>
            <Card.Text>
              A limited-edition reissue of a classic stompbox introduced in the mid-1970s, this Ibanez OD850 is an overdrive pedal intended for electric guitars and capable of overdrive, fuzz, and distortion tones.
            </Card.Text>

            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={JD991}
            onMouseOver={e => e.currentTarget.src = JD992}
            onMouseOut={e => e.currentTarget.src = JD991} />
          <Card.Body>
            <Card.Title> JD9 9</Card.Title>
            <Card.Text className='price'>$103.00</Card.Text>
            <Card.Text>
              From the 9 Series comes the Ibanez JD9 Jet Driver overdrive pedal, offering a wide variety of overdriven tones from vintage crunch to punchy distortion.</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

  )
}

export default Pedals