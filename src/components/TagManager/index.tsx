'use client'
import styles from './styles.module.css'

import TextInput, {
  InputButton,
  Props as TexInputProps,
} from '@/components/TextInput'
import { Add, Clear } from '@/components/SVG'
import {
  useState,
  useId,
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react'
import ListBox, { Option } from '@/components/ListBox'
import {
  keyInsensitiveCoincidence,
  keyInsensitiveSearch,
} from '@/utils/strings'

export interface TagManagerProps extends React.HTMLAttributes<HTMLFormElement> {
  suggestedTags?: string[]
  defaultTags?: string[]
  inputProps?: TexInputProps
  size?: 'sm' | 'md' | 'lg'
  label?: string
  onTagsChange?: (tags: string[]) => void
}
export interface TagManagerRefType {
  clearAllTags: () => void
  addTag: (tagToAdd: string) => void
  addTags: (tagsToAdd: string[]) => void
  removeTag: (tagToRemove: string) => void
  tags: string[]
  element: HTMLFormElement | null
}
const TagManager = forwardRef(
  (props: TagManagerProps, ref?: React.Ref<TagManagerRefType>) => {
    const {
      suggestedTags = [],
      defaultTags = [],
      inputProps = {},
      onTagsChange,
      size = 'md',
      label,
      ...other
    } = props
    const [inputValue, setInputValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const [suggestions, setSuggestions] = useState<string[]>(suggestedTags)
    const [tags, setTags] = useState<string[]>(defaultTags)

    useEffect(() => {
      onTagsChange && onTagsChange(tags)
    }, [tags])

    useEffect(() => {
      setSuggestions(suggestedTags)
    }, [suggestedTags])

    useEffect(() => {
      if (!inputValue && suggestedTags.length != suggestions.length) {
        setSuggestions(suggestedTags)
      }
    }, [inputValue])

    const formId = useId()

    const formRef = useRef<HTMLFormElement>(null)
    const textInputRef = useRef<HTMLInputElement>(null)
    const firstOptionRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value
      setInputValue(value)

      handleSuggestionFiltering(value)
    }
    const handleSuggestionFiltering = (search: string) => {
      if (search.trim()) {
        setSuggestions(
          suggestedTags.filter((suggestion) =>
            keyInsensitiveCoincidence(suggestion, search)
          )
        )
        return
      }
    }
    const closeListbox = () => {
      setIsFocused(false)
    }
    const openListbox = () => {
      setIsFocused(true)
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.stopPropagation()
      e.preventDefault()

      handleAddTag(inputValue.trim())
      setInputValue('')
    }
    const handleAddTag = (tagToAdd: string) => {
      if (inputValue) {
        setInputValue('')
      }
      if (tagToAdd && !keyInsensitiveSearch(tags, tagToAdd)) {
        setTags((tags) => [...tags, tagToAdd])
      }
    }
    const handleToggleTag = (tagToToggle: string | number) => {
      if (!tagToToggle || typeof tagToToggle !== 'string') return
      if (keyInsensitiveSearch(tags, tagToToggle)) {
        return handleRemoveTag(tagToToggle)
      }
      if (inputValue) {
        setInputValue('')
      }
      setTags((tags) => [...tags, tagToToggle])
    }
    const handleRemoveTag = (tagToRemove: string) => {
      setTags((tags) =>
        tags.filter(
          (currentTag) => !keyInsensitiveCoincidence(currentTag, tagToRemove)
        )
      )
    }
    const handleClearAllTags = () => {
      if (tags.length == 0) return
      setTags([])
    }
    const handleAddTags = (tagsToAdd: string[]) => {
      const uniques = tagsToAdd.filter(
        (tag) => !keyInsensitiveSearch(tags, tag)
      )
      setTags(uniques)
    }
    const suggestionListId = useId()
    const isSuggestionListVisible = isFocused && suggestions.length > 0

    useImperativeHandle(
      ref,
      () => {
        return {
          clearAllTags: handleClearAllTags,
          removeTag: handleRemoveTag,
          addTag: handleAddTag,
          addTags: handleAddTags,
          tags,
          element: formRef.current,
        }
      },
      [tags]
    )
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key == 'ArrowDown') {
        e.preventDefault()
        openListbox()
        firstOptionRef.current?.focus()
        return
      }
      if (e.key == 'Tab') {
        closeListbox()
      }
    }
    // const handleFocusLeaves = (e: KeyboardEvent) => {
    //   closeListbox()
    //   if (e.key == 'Escape') {
    //     e.preventDefault()
    //     textInputRef.current?.focus()
    //   }
    // }
    return (
      <form
        {...other}
        ref={formRef}
        id={formId}
        onSubmit={handleSubmit}
        className={styles['tag__form']}
      >
        <TextInput
          size={size}
          label={label}
          onKeyDown={handleKeyDown}
          ref={textInputRef}
          dataList={
            <ListBox
              multiple={true}
              size={size}
              autoFocus={false}
              onClickOutside={closeListbox}
              isVisible={isSuggestionListVisible}
              id={suggestionListId}
            >
              {suggestions.map((suggestion, index) => (
                <Option
                  ref={index == 0 ? firstOptionRef : undefined}
                  data-option={formId}
                  value={suggestion}
                  isVisible={isSuggestionListVisible}
                  selected={tags.includes(suggestion)}
                  key={suggestion + index}
                  onFocusLeaves={closeListbox}
                  onChange={handleToggleTag}
                >
                  {suggestion}
                </Option>
              ))}
            </ListBox>
          }
          type="text"
          name="autocomplete"
          data-autocomplete={formId}
          autoComplete="off"
          value={inputValue}
          onFocus={openListbox}
          onChange={handleChange}
          hasButtonRight={true}
          spellCheck="false"
          list={suggestionListId}
          addonRight={
            <div className={styles['text-input__buttons-container']}>
              <InputButton
                className="tooltip tooltip--bottom-to-left"
                data-tooltip="Add tag"
                aria-label="Add tag"
              >
                <Add />
              </InputButton>
              <InputButton
                onClick={handleClearAllTags}
                className="tooltip tooltip--bottom-to-left"
                data-tooltip="Clear all"
                aria-label="Clear all"
              >
                <Clear />
              </InputButton>
            </div>
          }
          {...inputProps}
        />
      </form>
    )
  }
)
TagManager.displayName = 'TagManager'
export default TagManager
