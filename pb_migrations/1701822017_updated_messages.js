/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fl2ptcrenp7cepp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpgtcjff",
    "name": "user",
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
  const collection = dao.findCollectionByNameOrId("fl2ptcrenp7cepp")

  // remove
  collection.schema.removeField("zpgtcjff")

  return dao.saveCollection(collection)
})
