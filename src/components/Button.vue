<template>
	<button
		:id="id"
		:data-testId="testId"
		:type="type"
		:disabled="disabled"
		class="duration-300 ease-out transition-all hover:shadow-sm px-4 py-2 rounded-md"
		:class="buttonVariants[variant]"
		@click="emits('onClick', $event)"
	>
		<div class="flex gap-1 items-center text-sm font-bold">
			<slot name="icon"></slot>
			<slot name="content"></slot>
		</div>
	</button>
</template>

<script setup lang="ts">
import {toRefs} from 'vue'

const buttonVariants = {
	white:
		'bg-white hover:bg-gray-100 text-gray-800 border-gray-300 border hover:border-gray-400 text-zinc-800',
	blue: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600 border hover:border-blue-700',
	red: 'bg-red-600 hover:bg-red-700 text-white border-red-600 border hover:border-red-700',
	green:
		'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 border hover:border-emerald-700',
}

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonVariant = keyof typeof buttonVariants

const props = withDefaults(
	defineProps<{
		id?: string
		testId?: string
		type?: ButtonType
		disabled?: boolean
		variant?: ButtonVariant
	}>(),
	{
		id: undefined,
		testId: undefined,
		type: 'button',
		disabled: false,
		onClick: undefined,
		variant: 'blue',
	}
)

const emits = defineEmits<{
	(event: 'onClick', payload: MouseEvent): void
}>()

const {id, type, disabled} = toRefs(props)
</script>
