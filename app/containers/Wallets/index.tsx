import * as React from 'react';
import styled from 'styled-components';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';

const WalletContainer = styled.div`
  padding: 10px;
`;

export default class Wallet extends React.Component<any, any> {
  public render() {
    return (
      <WalletContainer>
        <Pivot>
          <PivotItem linkText="My Tokens">
            List of tokens here
          </PivotItem>
          <PivotItem linkText="Transactions">
            list of transactions
          </PivotItem>
          <PivotItem linkText="New / Import Address">
            reara
          </PivotItem>
        </Pivot>
      </WalletContainer>
    );
  };
}