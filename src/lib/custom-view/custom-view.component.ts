import * as grapesjs from 'grapesjs'
import { BehaviorSubject } from 'rxjs'

import { script } from './script'
import { HeaderView } from './editor-header.view'
import { withLatestFrom } from 'rxjs/operators'
import { AppState } from '../utils'
import { CustomViewComponentName } from '../constants'

const codeMirrorConfiguration = {
    value: '',
    mode: 'javascript',
    lineNumbers: true,
    theme: 'blackboard',
    lineWrapping: false,
    indentUnit: 4,
}

const defaultSrc = `
return async ({cdn}) => {
    const {fluxView, rxjs} = await cdn.install({ 
        modules: ['@youwol/flux-view'],
        aliases: { fluxView: "@youwol/flux-view" }
    })
    const vDOM = {
         innerText: 'hello world'
    }
    return fluxView.render(vDOM)
}`

export class CustomViewComponent {
    public readonly appState: AppState
    public readonly grapesEditor: grapesjs.Editor
    public readonly idFactory: (name: string) => string

    public readonly componentType: string

    public readonly extendFn = ['initialize']
    isComponent = (el: HTMLElement) => {
        return (
            el.getAttribute &&
            el.getAttribute('componentType') == this.componentType
        )
    }
    public readonly model
    public readonly view

    constructor(params: {
        appState: AppState
        grapesEditor: grapesjs.Editor
        idFactory: (name: string) => string
    }) {
        Object.assign(this, params)
        this.componentType = this.idFactory(CustomViewComponentName)

        this.model = this.getModel()
        this.view = this.getView()
    }

    getModel() {
        return {
            defaults: {
                script,
                tagName: 'div',
                droppable: false,
                attributes: {
                    componentType: this.componentType,
                },
            },
        }
    }

    getView() {
        return {
            events: {
                dblclick: 'editSrc',
            },
            editSrc: () => {
                const component = this.grapesEditor.getSelected()
                if (!component.getAttributes().src) {
                    component.addAttributes({ src: defaultSrc })
                }
                const src$ = new BehaviorSubject(component.getAttributes().src)
                this.appState.editCode({
                    headerView: (state) => {
                        const headerView = new HeaderView({ state })
                        headerView.run$
                            .pipe(withLatestFrom(src$))
                            .subscribe(([_, src]) => {
                                component && component.addAttributes({ src })
                                component.view.render()
                            })
                        return headerView
                    },
                    content$: src$,
                    configuration: codeMirrorConfiguration,
                    requirements: {
                        scripts: [
                            'codemirror#5.52.0~mode/javascript.min.js',
                            'codemirror#5.52.0~mode/css.min.js',
                            'codemirror#5.52.0~mode/xml.min.js',
                            'codemirror#5.52.0~mode/htmlmixed.min.js',
                        ],
                        css: [],
                    },
                })
            },
        }
    }
}
