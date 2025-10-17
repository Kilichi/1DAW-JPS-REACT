import githubIcon from '../../assets/github-mark/github-mark-white.png';

const LinkButton = ({link}) => {
    return (
        <a className="link-button" href={link}><img src={githubIcon} alt="GitHub" width={30} /></a>
    );
}

export default LinkButton;