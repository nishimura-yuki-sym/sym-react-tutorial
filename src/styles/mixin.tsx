export const placeholder = color => `
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${color};
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: ${color};
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: ${color};
    opacity: 1;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: ${color};
  }
`;

export const appearance = value => `
  -moz-appearance: ${value};
  -webkit-appearance: ${value};
  appearance: ${value};
`;
