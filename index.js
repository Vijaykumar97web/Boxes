const Box = props => {
  //  Write your code here.
  const {className, message} = props
  const containerclassName = `box-container ${className}`
  return (
    <div className={containerclassName}>
      <p class='message'>{message}</p>
    </div>
  )
}

const element = (
  //  Write your code here.
  <div className='container'>
    <h1 className='title'>Boxes</h1>
    <div class='card-container'>
      <Box className='box1' message='Small' />
      <Box className='box2' message='Medium' />
      <Box className='box3' message='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
