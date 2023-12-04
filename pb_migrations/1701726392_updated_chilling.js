/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("474l6qiw4k8yiwl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xtujimoe",
    "name": "lol",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("474l6qiw4k8yiwl")

  // remove
  collection.schema.removeField("xtujimoe")

  return dao.saveCollection(collection)
})
