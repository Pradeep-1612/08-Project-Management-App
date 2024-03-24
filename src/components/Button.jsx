export default function Button({ label, cssClassName, onClickEvent }) {
  return (
    <>
      <button className={cssClassName ? cssClassName : "primary-button"} onClick={onClickEvent}>
        {label}
      </button>
    </>
  );
}
