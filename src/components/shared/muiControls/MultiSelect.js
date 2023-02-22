import React from "react";
import { OutlinedInput } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import _ from "lodash";
import "./MultiSelect.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function MultiSelect({
  options,
  initialSelectedOptions,
  label,
  setterFunction,
  eventFunction,
  name,
  disabled,
}) {
  if (!options) {
    options = [];
  }

  if (!initialSelectedOptions) {
    initialSelectedOptions = [];
  }

  if (!label) {
    label = "Chips";
  }

  if (!name) {
    name = "multiselect";
  }

  if (!setterFunction) {
    setterFunction = (value) => {};
  }

  if (!eventFunction) {
    eventFunction = (value) => {};
  }

  const [selectedOptions, setSelectedOptions] = React.useState(
    initialSelectedOptions
  );

  const [choices, setChoices] = React.useState(options || []);

  React.useEffect(() => {
    setSelectedOptions(initialSelectedOptions);
    eventFunction({ target: { name: name, value: initialSelectedOptions } });
    setterFunction(initialSelectedOptions);
  }, [initialSelectedOptions]);

  React.useEffect(() => {
    setChoices(options);
  }, [options]);

  const handleChange = (event) => {
    setSelectedOptions(event.target.value);
    eventFunction(event);
    setterFunction(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={"formControl"}>
        <InputLabel id="demo-mutiple-chip-label">{label}</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          name={name}
          disabled={disabled}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              name={name}
              label={label}
            />
          }
          renderValue={(selected) => (
            <div className={"chips"}>
              {selected.map((value) => {
                let item = _.find(options, { id: value });
                return (
                  <Chip
                    key={item.title}
                    label={item.title}
                    className={"chip"}
                  />
                );
              })}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {choices.map((name) => (
            <MenuItem key={name.id} value={name.id}>
              {name.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
