const SelectItem = (idItem, titleItem, selectOptions, requiredItem) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={idItem} className="text-gray-500">
        {titleItem}
      </label>
      <select
        name={idItem}
        id={idItem}
        className="h-full rounded bg-transparent p-2 text-gray-500 focus:ring-0 border border-gray-200 focus:border-green_hd focus:outline-none"
        required={requiredItem}
      >
        {selectOptions.map((option, index) => {
          return (
            <option key={index} value={option.value} className="font-mulish">
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectItem;
