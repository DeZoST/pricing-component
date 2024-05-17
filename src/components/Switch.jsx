

// eslint-disable-next-line react/prop-types
const Switch = ({ isOn, handleToggle, colorOne, colorTwo }) => {
  return (
    <>
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="switch__checkbox"
          id={`switch`}
        />
        <label style={{ background: isOn ? colorOne : colorTwo }} className="switch__label" htmlFor={`switch`}><span className="switch__button" /></label>
    </>
  )
}

export default Switch