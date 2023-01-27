import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Fender1 from '../../assets/Bass/Fender/BassFront1.png'
import Fender2 from '../../assets/Bass/Fender/BassBack2.png'
import BcRich1 from '../../assets/Bass/B.C.Rich/BassB1.png'
import BcRich2 from '../../assets/Bass/B.C.Rich/BassFront.png'
import Ibanez1 from '../../assets/Bass/Ibanez/BassFront.png'
import Ibanez2 from '../../assets/Bass/Ibanez/BassBack.png'
import './Bass.css'
function Bass() {
  return (
    <div>
      <h1 className='dicM'> Bass</h1>
      <div className='Bass body'>
        <Card>
          <Card.Img variant="top" src={BcRich1}
            onMouseOver={e => e.currentTarget.src = BcRich2}
            onMouseOut={e => e.currentTarget.src = BcRich1}
          />
          <Card.Body>
            <Card.Title>B.c. Rich</Card.Title>
            <Card.Text className='price'>$1,299.99</Card.Text>
            <Card.Text>
              The Chris Kael Signature Warlock 4 string bass features a mahogany body in Satin Black finish with Abalone binding on the body, fretboard and headstock.
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={Fender1}
            onMouseOver={e => e.currentTarget.src = Fender2}
            onMouseOut={e => e.currentTarget.src = Fender1} />
          <Card.Body>
            <Card.Title>Fender</Card.Title>
            <Card.Text className='price'>$449.99</Card.Text>
            <Card.Text>
              A tribute to the decade that made the P Bass® an icon, the Classic Vibe 60s Precision Bass® embodies the aesthetics of the original and produces massive tone courtesy of its Fender-Designed alnico split-coil pickup.</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>


        <Card>
          <Card.Img variant="top" src={Ibanez1}
            onMouseOver={e => e.currentTarget.src = Ibanez2}
            onMouseOut={e => e.currentTarget.src = Ibanez1}
          />
          <Card.Body>
            <Card.Title>Ibanez</Card.Title>
            <Card.Text className='price'>1,300.00$</Card.Text>
            <Card.Text>
              Neck Type: KIKOSP3Maple<br />
              Body: Poplar body <br />
              Fretboard: Jatoba Fretboard /24 Frets
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>


      </div>
    </div>
  )
}

export default Bass