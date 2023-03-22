import harry from '../images/Harry-Potter.jpg'

function Header () {
    return (
        <header className='header'>
        <img className='header-cover' src={harry} alt='HarryPotter' title='HarryPotter' />
    </header>
    )
}

export default Header;
