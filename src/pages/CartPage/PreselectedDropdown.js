import { useState } from "react";

export default function PreselectedDropdown({
  pre,
  upc,
  username,
  setCostFn,
}) {
  const id = upc;
  const user = username;
  const [preselect, setPreselect] = useState(pre);
  const updatePreselect = (val) => {
    setPreselect(val);
  };

  const changeQuantity = async (val) => {
    const value = val.target.value
    updatePreselect(value);
    const result = await setCostFn({user: user, upc: id, quantity: value})
    return result
  }

  return (
    <div>
      <select
        className="form-select bg-transparent py-0 border border-dark"
        defaultValue={preselect}
        onChange={async (e) => {
            try {
                await changeQuantity(e)
            } catch (error) {
                console.log(error)
            }
        }}
        style={{direction: 'rtl'}}
        id={id}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}
