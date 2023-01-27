import React from 'react'
import './GuitarPicks.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import JTC11 from '../../assets/Accessories/Pick/JTC1.png'
import JTC12 from '../../assets/Accessories/Pick/JTC1-2.jpg'
import JTC1R1 from '../../assets/Accessories/Pick/JTC1R.png'
import JTC1R12 from '../../assets/Accessories/Pick/JTC1R-2.jpg'
import Fender from '../../assets/Accessories/Pick/198-0351-802.png'
function GuitarPicks() {
  return (
    <div>
      <h1 className='dicM'> Guitar Picks</h1>
      <div className='picks body'>
        <Card>
          <Card.Img variant="top" src={JTC11}
            onMouseOver={e => e.currentTarget.src = JTC12}
            onMouseOut={e => e.currentTarget.src = JTC11}
          />
          <Card.Body>
            <Card.Title>JTC1</Card.Title>
            <Card.Text className='price'>$19.99</Card.Text>
            <Card.Text>
              The 2.5mm ultra thick JTC1 is made of "Tritan," a copolyester material that assists in fast picking and works well in tandem with fingerstyle playing for a superior tonal consistency.
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Fender}
            onMouseOver={e => e.currentTarget.src = Fender}
            onMouseOut={e => e.currentTarget.src = Fender}
          />
          <Card.Body>
            <Card.Title>Fender</Card.Title>
            <Card.Text className='price'>$7.99</Card.Text>
            <Card.Text>
              Experience the classic feel of Fender no matter what guitar or bass you play. Fender picks provide comfort and high-performance flexibility for every performer, with a variety of sizes, shapes and thicknesses to suit the playing styles and preferences of every guitarist.
            </Card.Text>

            <Button variant="primary" disabled>Out Of Stock</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={JTC1R1}
            onMouseOver={e => e.currentTarget.src = JTC1R12}
            onMouseOut={e => e.currentTarget.src = JTC1R1} />
          <Card.Body>
            <Card.Title>JTC1R</Card.Title>
            <Card.Text className='price'>$24.99</Card.Text>
            <Card.Text>
              The 2.5mm ultra thick JTC1 is made of "Tritan," a copolyester material that assists in fast picking and works well in tandem with fingerstyle playing for a superior tonal consistency.
            </Card.Text>
            <Button variant="primary" >Buy Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default GuitarPicks