"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        core.info(`deploy key: ${core.getInput('deploy_key')}`);
        // core.debug(`deploy key: ${core.getInput('deploy_key')}`)
        // core.debug(`wait: ${core.getBooleanInput('wait')}`)
        //
        // try {
        //   const args = [
        //     core.getInput('image') && `--image=${core.getInput('image')}`,
        //     core.getInput('branch') && `--branch=${core.getInput('branch')}`,
        //     core.getInput('follow') && `--follow=${core.getBooleanInput('wait')}`
        //   ]
        //
        //   await exec.exec('zeet deploy', [
        //     core.getInput('project'),
        //     ...args.filter(a => a)
        //   ])
        //
        //   core.setOutput('link', 'test')
        //
        //   // const status = await exec.getExecOutput(
        //   //   'zeet status',
        //   //   [core.getInput('project')],
        //   //   {silent: true}
        //   // )
        //   // const links = status.stdout.match('(https?:\\/\\/zeet\\.co\\/repo[^\\s]+)')
        //   // core.setOutput('link', links ? links[0] : 'Not Found')
        // } catch (e: unknown) {
        //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //   // @ts-ignore
        //   core.setFailed(e)
        // }
    });
}
main();
