import { slugify } from '../utils'

//-------------------------------------------------------------------
var listView = {
    path: 'sections',
    title: 'Sections',
    actions: {
        // list: function (req, connectors) { return connectors.sections.read(req) }
        list: function (req, connectors) {
            let res = connectors.sections.read(req)
            console.log("YYY", res)
            return res
        }
    }
}

listView.fields = [
    {
        name: 'name',
        label: 'Name',
        main: true,
        sortable: true,
        sorted: 'ascending',
        sortpriority: '1',
    },
    {
        name: 'slug',
        label: 'Slug',
    },
    // {
    //     name: 'counterEntries',
    //     label: 'No. Entries',
    // },
]

//-------------------------------------------------------------------
var changeView = {
    path: 'sections/:_id',
    title: 'Section',
    actions: {
        get: function (req, connectors) { return connectors.section(req.id).read(req) },
        delete: function (req, connectors) { return connectors.section(req.id).delete(req) },
        save: function (req, connectors) { return connectors.section(req.id).update(req) },
    },
}

changeView.fields = [
    {
        name: 'name',
        label: 'Name',
        field: 'String',
        required: true
    },
    {
        name: 'slug',
        label: 'Slug',
        field: 'String',
        // onChange: {
        //     in: 'name',
        //     setInitialValue: (name) => slugify(name.value),
        // },
        props: {
            helpText: `If left blank, the slug will be automatically generated.
            More about slugs <a href="http://en.wikipedia.org/wiki/Slug" target="_blank">here</a>.`,
        }
    }
]

//-------------------------------------------------------------------
var addView = {
    path: 'sections/new',
    title: 'New Section',
    fields: changeView.fields,
    actions: {
        add: function (req, connectors) { return connectors.sections.create(req) },
    },
}


module.exports = {
    listView,
    changeView,
    addView,
}