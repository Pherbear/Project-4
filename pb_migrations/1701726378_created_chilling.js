/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "474l6qiw4k8yiwl",
    "created": "2023-12-04 21:46:18.574Z",
    "updated": "2023-12-04 21:46:18.574Z",
    "name": "chilling",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uo4shhwq",
        "name": "field",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("474l6qiw4k8yiwl");

  return dao.deleteCollection(collection);
})
