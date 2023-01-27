import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BcRich1 from '../../assets/Guitars/Electric/B.C.Rich/Bcrich1.png'
import BcRich2 from '../../assets/Guitars/Electric/B.C.Rich/Bcrich2.png'
import Ibanez1 from '../../assets/Guitars/Electric/Ibanez/Ibanez1.png'
import Ibanez2 from '../../assets/Guitars/Electric/Ibanez/Ibanez2.png'
import Gipson1 from '../../assets/Guitars/Electric/Gipson/Gipsoon1.png'
import Gipson2 from '../../assets/Guitars/Electric/Gipson/Gipsoon2Back.png'


import './Guitar.css'

function Guitars() {
  return (
    <div>
      <h1 className='dicM'> Guitar</h1>
      <div className='Guitar  body'>
        <Card>
          <Card.Img variant="top" src={BcRich1}
            onMouseOver={e => e.currentTarget.src = BcRich2}
            onMouseOut={e => e.currentTarget.src = BcRich1}
          />
          <Card.Body>
            <Card.Title>B.c. Rich</Card.Title>
            <Card.Text className='price'>$1,799.99</Card.Text>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={Gipson1}
            onMouseOver={e => e.currentTarget.src = Gipson2}
            onMouseOut={e => e.currentTarget.src = Gipson1} />
          <Card.Body>
            <Card.Title>SG Standard</Card.Title>
            <Card.Text className='price'>$1,799.00</Card.Text>
            <Card.Text>
              The Gibson SG Standard rocks the classic looks and features associated with the late 60's style SG models sought after by many.
            </Card.Text>
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
            <Card.Text className='price'>$1,300.00</Card.Text>
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

export default Guitars