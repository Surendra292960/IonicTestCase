import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
 
const DATABASE_NAME: string = 'signalsDatabase.db';

@Injectable()
export class DatabaseProvider {
  public db : SQLiteObject;

  constructor(public http: Http, public sqlite: SQLite) {
  }

  public createDatabase() {
    this.sqlite.create({name: DATABASE_NAME, location: 'default'})
    .then((db: SQLiteObject) => {
      this.db = db;
      })
      .catch(e => alert(e));
  }

  //création de la table `SIGNALEMENTS`
  public createTable() {
    this.db.executeSql('CREATE TABLE IF NOT EXISTS `SIGNALEMENTS` ( `idSIGNALEMENTS` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `signalement` TEXT NOT NULL, `date` TEXT NOT NULL, `commentaires` TEXT NOT NULL, `longit` INTEGER NOT NULL, `latit` INTEGER NOT NULL, `image` BLOB )',)
      .then(() => alert('SQL query executed'))
      .catch(e => alert(e));
  }

  public insertInto(signal_details){
    let insert_query = 'INSERT INTO `SIGNALEMENTS` (signalement, date, commentaires, longit, latit) VALUES (?, ?, ?, ?, ?)';
    this.db.executeSql(insert_query, [signal_details.signalement, 
                                       signal_details.date, 
                                       signal_details.commentaires,
                                       signal_details.longit,
                                       signal_details.latit
                                      ])
    .then((data) => alert("Data insertion executed"))
    .catch((e) => alert(e));
  }
 
  public getSignalements(){
    return this.db.executeSql('SELECT * FROM SIGNALEMENTS', []);
  }

  //méthode de suppression de la table
  public dropDatabase(){
    this.sqlite.deleteDatabase({name: DATABASE_NAME,      
                                location: 'default'
                              })
  }
  
}