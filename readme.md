Deployment Flow


i. We have to deploy Comptroller
ii: Then Deploy White paper Interest Rate Model 
iii: Deploy Chain Link
iv: Deploy CErc20Delegate.sol
v: Deploy the underlying asset
vi: Deploy CErc20 or CErc20Delegator and pass the underlying contract address and other params
vii: Enter Market Comptroller
viii: Support Market Comptroller
ix: Set Collateral Factor
x: Chain Link set direct and set underlying price and set feed by passing CToken or CErc20Delegator address
xi: approve from underlying asset by passing CErc20Delegator address
xii: mint from CErc20Delegator
xii: Borrow from delegator