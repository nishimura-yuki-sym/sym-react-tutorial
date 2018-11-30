import * as React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
import Typography from './Typography';

const OverlayIndicatorStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  let: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  background-color: rgba(0, 0, 0, .5);
  box-sizing: border-box;
`;

const Modal = styled.div`
  width: 400px;
  height: 100px;
  padding: 12px 8px 12px 8px ;
  background-color: ${colors.white};
  border-radius: 4px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .12), 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const OverlayIndicator = () => {
  return (
    <OverlayIndicatorStyle>
      <Modal>
        <Typography variant={Typography.Variant.SectionHeading}>読み込み中...</Typography>
      </Modal>
    </OverlayIndicatorStyle>
  );
};

export default OverlayIndicator;
