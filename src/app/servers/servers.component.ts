import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  AllowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = 'Servertest';
  serverCreated = false;
  servers = [ 'Testeserver', 'TestServerNew']
  constructor() {

    setTimeout( () => {
      this.AllowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server: ' + this.serverName + ' created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

}
