describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not append empty fields', function (){
  serverNameInput.value = '';
  submitServerInfo();
  expect(serverName).not.toEqual('');
  });

  it('should update the server table element with new rows and tds', function(){
    submitServerInfo()
    updateServerTable()
    let numOfServerCells = document.querySelectorAll("#serverTable td");
    expect(numOfServerCells.length).toEqual(3)
    let numOfServerRows = document.querySelectorAll("#serverTable tbody tr");
    expect(numOfServerRows.length).toEqual(1)
  });

  it('should have a delete btn', function () {
    submitServerInfo();
    updateServerTable();
    let cells = document.querySelectorAll('#serverTable tbody tr td');
    expect(cells[2].innerText).toEqual('X');
  });


  afterEach(function() {    
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = '';
  });
});
