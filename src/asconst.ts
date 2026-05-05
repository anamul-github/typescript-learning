// as const assertion

const UserRoles = {
    Admin : 'ADMIN',
    Editor : 'EDITOR',
    Viewer : 'VIEWER',
} as const;

/* 
** When we use as const, it puts readonly before the code. Basically value is constant and cannot be changed.
    readonly Admin = 'Admin',
    readonly Editor = 'Editor',
    readonly Viewer = 'Viewer',

    1. typeof operator
    2. keyof operator

    typeof UserRoles 
    {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
    }

    keyof typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'

    'ADMIN' | 'EDITOR' | 'VIEWER'

    UserRoles['Admin'] >>> 'ADMIN'
        typeof UserRoles[keyof typeof UserRoles]
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if(role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissible = canEdit(UserRoles.Admin);
console.log(isEditPermissible);